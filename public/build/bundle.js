
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_input_value(input, value) {
        input.value = value == null ? '' : value;
    }
    function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, cancelable, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error('Function called outside component initialization');
        return current_component;
    }
    /**
     * Creates an event dispatcher that can be used to dispatch [component events](/docs#template-syntax-component-directives-on-eventname).
     * Event dispatchers are functions that can take two arguments: `name` and `detail`.
     *
     * Component events created with `createEventDispatcher` create a
     * [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent).
     * These events do not [bubble](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture).
     * The `detail` argument corresponds to the [CustomEvent.detail](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail)
     * property and can contain any type of data.
     *
     * https://svelte.dev/docs#run-time-svelte-createeventdispatcher
     */
    function createEventDispatcher() {
        const component = get_current_component();
        return (type, detail, { cancelable = false } = {}) => {
            const callbacks = component.$$.callbacks[type];
            if (callbacks) {
                // TODO are there situations where events could be dispatched
                // in a server (non-DOM) environment?
                const event = custom_event(type, detail, { cancelable });
                callbacks.slice().forEach(fn => {
                    fn.call(component, event);
                });
                return !event.defaultPrevented;
            }
            return true;
        };
    }

    const dirty_components = [];
    const binding_callbacks = [];
    let render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = /* @__PURE__ */ Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    // flush() calls callbacks in this order:
    // 1. All beforeUpdate callbacks, in order: parents before children
    // 2. All bind:this callbacks, in reverse order: children before parents.
    // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
    //    for afterUpdates called during the initial onMount, which are called in
    //    reverse order: children before parents.
    // Since callbacks might update component values, which could trigger another
    // call to flush(), the following steps guard against this:
    // 1. During beforeUpdate, any updated components will be added to the
    //    dirty_components array and will cause a reentrant call to flush(). Because
    //    the flush index is kept outside the function, the reentrant call will pick
    //    up where the earlier call left off and go through all dirty components. The
    //    current_component value is saved and restored so that the reentrant call will
    //    not interfere with the "parent" flush() call.
    // 2. bind:this callbacks cannot trigger new flush() calls.
    // 3. During afterUpdate, any updated components will NOT have their afterUpdate
    //    callback called a second time; the seen_callbacks set, outside the flush()
    //    function, guarantees this behavior.
    const seen_callbacks = new Set();
    let flushidx = 0; // Do *not* move this inside the flush() function
    function flush() {
        // Do not reenter flush while dirty components are updated, as this can
        // result in an infinite loop. Instead, let the inner flush handle it.
        // Reentrancy is ok afterwards for bindings etc.
        if (flushidx !== 0) {
            return;
        }
        const saved_component = current_component;
        do {
            // first, call beforeUpdate functions
            // and update components
            try {
                while (flushidx < dirty_components.length) {
                    const component = dirty_components[flushidx];
                    flushidx++;
                    set_current_component(component);
                    update(component.$$);
                }
            }
            catch (e) {
                // reset dirty state to not end up in a deadlocked state and then rethrow
                dirty_components.length = 0;
                flushidx = 0;
                throw e;
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    /**
     * Useful for example to execute remaining `afterUpdate` callbacks before executing `destroy`.
     */
    function flush_render_callbacks(fns) {
        const filtered = [];
        const targets = [];
        render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
        targets.forEach((c) => c());
        render_callbacks = filtered;
    }
    const outroing = new Set();
    let outros;
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
        else if (callback) {
            callback();
        }
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
                // if the component was destroyed immediately
                // it will update the `$$.on_destroy` reference to `null`.
                // the destructured on_destroy may still reference to the old array
                if (component.$$.on_destroy) {
                    component.$$.on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            flush_render_callbacks($$.after_update);
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: [],
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            if (!is_function(callback)) {
                return noop;
            }
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.59.2' }, detail), { bubbles: true }));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation, has_stop_immediate_propagation) {
        const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        if (has_stop_immediate_propagation)
            modifiers.push('stopImmediatePropagation');
        dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /* src\Display.svelte generated by Svelte v3.59.2 */

    const file$2 = "src\\Display.svelte";

    function create_fragment$2(ctx) {
    	let div;
    	let input;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			div = element("div");
    			input = element("input");
    			attr_dev(input, "type", "text");
    			attr_dev(input, "class", "input-text svelte-1ujzlmt");
    			input.readOnly = true;
    			attr_dev(input, "aria-label", "Display da calculadora");
    			add_location(input, file$2, 5, 2, 122);
    			attr_dev(div, "class", "display-container svelte-1ujzlmt");
    			add_location(div, file$2, 4, 0, 87);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, input);
    			set_input_value(input, /*value*/ ctx[0]);

    			if (!mounted) {
    				dispose = listen_dev(input, "input", /*input_input_handler*/ ctx[1]);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*value*/ 1 && input.value !== /*value*/ ctx[0]) {
    				set_input_value(input, /*value*/ ctx[0]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Display', slots, []);
    	let { value = '0' } = $$props;
    	const writable_props = ['value'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Display> was created with unknown prop '${key}'`);
    	});

    	function input_input_handler() {
    		value = this.value;
    		$$invalidate(0, value);
    	}

    	$$self.$$set = $$props => {
    		if ('value' in $$props) $$invalidate(0, value = $$props.value);
    	};

    	$$self.$capture_state = () => ({ value });

    	$$self.$inject_state = $$props => {
    		if ('value' in $$props) $$invalidate(0, value = $$props.value);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [value, input_input_handler];
    }

    class Display extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, { value: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Display",
    			options,
    			id: create_fragment$2.name
    		});
    	}

    	get value() {
    		throw new Error("<Display>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set value(value) {
    		throw new Error("<Display>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Key.svelte generated by Svelte v3.59.2 */
    const file$1 = "src\\Key.svelte";

    function create_fragment$1(ctx) {
    	let div0;
    	let button0;
    	let t1;
    	let button1;
    	let t3;
    	let button2;
    	let t5;
    	let button3;
    	let t7;
    	let div1;
    	let button4;
    	let t9;
    	let button5;
    	let t11;
    	let button6;
    	let t13;
    	let button7;
    	let t15;
    	let div2;
    	let button8;
    	let t17;
    	let button9;
    	let t19;
    	let button10;
    	let t21;
    	let button11;
    	let t23;
    	let div3;
    	let button12;
    	let t25;
    	let button13;
    	let t27;
    	let button14;
    	let t29;
    	let button15;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			button0 = element("button");
    			button0.textContent = "1";
    			t1 = space();
    			button1 = element("button");
    			button1.textContent = "2";
    			t3 = space();
    			button2 = element("button");
    			button2.textContent = "3";
    			t5 = space();
    			button3 = element("button");
    			button3.textContent = "+";
    			t7 = space();
    			div1 = element("div");
    			button4 = element("button");
    			button4.textContent = "4";
    			t9 = space();
    			button5 = element("button");
    			button5.textContent = "5";
    			t11 = space();
    			button6 = element("button");
    			button6.textContent = "6";
    			t13 = space();
    			button7 = element("button");
    			button7.textContent = "-";
    			t15 = space();
    			div2 = element("div");
    			button8 = element("button");
    			button8.textContent = "7";
    			t17 = space();
    			button9 = element("button");
    			button9.textContent = "8";
    			t19 = space();
    			button10 = element("button");
    			button10.textContent = "9";
    			t21 = space();
    			button11 = element("button");
    			button11.textContent = "*";
    			t23 = space();
    			div3 = element("div");
    			button12 = element("button");
    			button12.textContent = "0";
    			t25 = space();
    			button13 = element("button");
    			button13.textContent = "/";
    			t27 = space();
    			button14 = element("button");
    			button14.textContent = "=";
    			t29 = space();
    			button15 = element("button");
    			button15.textContent = "C";
    			attr_dev(button0, "class", "btn svelte-2om6w4");
    			add_location(button0, file$1, 10, 2, 216);
    			attr_dev(button1, "class", "btn svelte-2om6w4");
    			add_location(button1, file$1, 11, 2, 279);
    			attr_dev(button2, "class", "btn svelte-2om6w4");
    			add_location(button2, file$1, 12, 2, 342);
    			attr_dev(button3, "class", "btn operador svelte-2om6w4");
    			add_location(button3, file$1, 13, 2, 405);
    			attr_dev(div0, "class", "button-row svelte-2om6w4");
    			add_location(div0, file$1, 9, 0, 188);
    			attr_dev(button4, "class", "btn svelte-2om6w4");
    			add_location(button4, file$1, 16, 2, 511);
    			attr_dev(button5, "class", "btn svelte-2om6w4");
    			add_location(button5, file$1, 17, 2, 574);
    			attr_dev(button6, "class", "btn svelte-2om6w4");
    			add_location(button6, file$1, 18, 2, 637);
    			attr_dev(button7, "class", "btn operador svelte-2om6w4");
    			add_location(button7, file$1, 19, 2, 700);
    			attr_dev(div1, "class", "button-row svelte-2om6w4");
    			add_location(div1, file$1, 15, 0, 483);
    			attr_dev(button8, "class", "btn svelte-2om6w4");
    			add_location(button8, file$1, 22, 2, 806);
    			attr_dev(button9, "class", "btn svelte-2om6w4");
    			add_location(button9, file$1, 23, 2, 869);
    			attr_dev(button10, "class", "btn svelte-2om6w4");
    			add_location(button10, file$1, 24, 2, 932);
    			attr_dev(button11, "class", "btn operador svelte-2om6w4");
    			add_location(button11, file$1, 25, 2, 995);
    			attr_dev(div2, "class", "button-row svelte-2om6w4");
    			add_location(div2, file$1, 21, 0, 778);
    			attr_dev(button12, "class", "btn svelte-2om6w4");
    			add_location(button12, file$1, 28, 2, 1101);
    			attr_dev(button13, "class", "btn operador svelte-2om6w4");
    			add_location(button13, file$1, 29, 2, 1164);
    			attr_dev(button14, "class", "btn operador svelte-2om6w4");
    			add_location(button14, file$1, 30, 2, 1236);
    			attr_dev(button15, "class", "btn C svelte-2om6w4");
    			add_location(button15, file$1, 31, 2, 1308);
    			attr_dev(div3, "class", "button-row svelte-2om6w4");
    			add_location(div3, file$1, 27, 0, 1073);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			append_dev(div0, button0);
    			append_dev(div0, t1);
    			append_dev(div0, button1);
    			append_dev(div0, t3);
    			append_dev(div0, button2);
    			append_dev(div0, t5);
    			append_dev(div0, button3);
    			insert_dev(target, t7, anchor);
    			insert_dev(target, div1, anchor);
    			append_dev(div1, button4);
    			append_dev(div1, t9);
    			append_dev(div1, button5);
    			append_dev(div1, t11);
    			append_dev(div1, button6);
    			append_dev(div1, t13);
    			append_dev(div1, button7);
    			insert_dev(target, t15, anchor);
    			insert_dev(target, div2, anchor);
    			append_dev(div2, button8);
    			append_dev(div2, t17);
    			append_dev(div2, button9);
    			append_dev(div2, t19);
    			append_dev(div2, button10);
    			append_dev(div2, t21);
    			append_dev(div2, button11);
    			insert_dev(target, t23, anchor);
    			insert_dev(target, div3, anchor);
    			append_dev(div3, button12);
    			append_dev(div3, t25);
    			append_dev(div3, button13);
    			append_dev(div3, t27);
    			append_dev(div3, button14);
    			append_dev(div3, t29);
    			append_dev(div3, button15);

    			if (!mounted) {
    				dispose = [
    					listen_dev(button0, "click", /*click_handler*/ ctx[1], false, false, false, false),
    					listen_dev(button1, "click", /*click_handler_1*/ ctx[2], false, false, false, false),
    					listen_dev(button2, "click", /*click_handler_2*/ ctx[3], false, false, false, false),
    					listen_dev(button3, "click", /*click_handler_3*/ ctx[4], false, false, false, false),
    					listen_dev(button4, "click", /*click_handler_4*/ ctx[5], false, false, false, false),
    					listen_dev(button5, "click", /*click_handler_5*/ ctx[6], false, false, false, false),
    					listen_dev(button6, "click", /*click_handler_6*/ ctx[7], false, false, false, false),
    					listen_dev(button7, "click", /*click_handler_7*/ ctx[8], false, false, false, false),
    					listen_dev(button8, "click", /*click_handler_8*/ ctx[9], false, false, false, false),
    					listen_dev(button9, "click", /*click_handler_9*/ ctx[10], false, false, false, false),
    					listen_dev(button10, "click", /*click_handler_10*/ ctx[11], false, false, false, false),
    					listen_dev(button11, "click", /*click_handler_11*/ ctx[12], false, false, false, false),
    					listen_dev(button12, "click", /*click_handler_12*/ ctx[13], false, false, false, false),
    					listen_dev(button13, "click", /*click_handler_13*/ ctx[14], false, false, false, false),
    					listen_dev(button14, "click", /*click_handler_14*/ ctx[15], false, false, false, false),
    					listen_dev(button15, "click", /*click_handler_15*/ ctx[16], false, false, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t7);
    			if (detaching) detach_dev(div1);
    			if (detaching) detach_dev(t15);
    			if (detaching) detach_dev(div2);
    			if (detaching) detach_dev(t23);
    			if (detaching) detach_dev(div3);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Key', slots, []);
    	const dispatch = createEventDispatcher();

    	function Digito(value) {
    		dispatch('keypress', value);
    	}

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Key> was created with unknown prop '${key}'`);
    	});

    	const click_handler = () => Digito('1');
    	const click_handler_1 = () => Digito('2');
    	const click_handler_2 = () => Digito('3');
    	const click_handler_3 = () => Digito('+');
    	const click_handler_4 = () => Digito('4');
    	const click_handler_5 = () => Digito('5');
    	const click_handler_6 = () => Digito('6');
    	const click_handler_7 = () => Digito('-');
    	const click_handler_8 = () => Digito('7');
    	const click_handler_9 = () => Digito('8');
    	const click_handler_10 = () => Digito('9');
    	const click_handler_11 = () => Digito('*');
    	const click_handler_12 = () => Digito('0');
    	const click_handler_13 = () => Digito('/');
    	const click_handler_14 = () => Digito('=');
    	const click_handler_15 = () => Digito('C');
    	$$self.$capture_state = () => ({ createEventDispatcher, dispatch, Digito });

    	return [
    		Digito,
    		click_handler,
    		click_handler_1,
    		click_handler_2,
    		click_handler_3,
    		click_handler_4,
    		click_handler_5,
    		click_handler_6,
    		click_handler_7,
    		click_handler_8,
    		click_handler_9,
    		click_handler_10,
    		click_handler_11,
    		click_handler_12,
    		click_handler_13,
    		click_handler_14,
    		click_handler_15
    	];
    }

    class Key extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Key",
    			options,
    			id: create_fragment$1.name
    		});
    	}
    }

    /* src\App.svelte generated by Svelte v3.59.2 */
    const file = "src\\App.svelte";

    function create_fragment(ctx) {
    	let main;
    	let div1;
    	let div0;
    	let display;
    	let t;
    	let key;
    	let current;

    	display = new Display({
    			props: {
    				value: /*displayValue*/ ctx[0],
    				readonly: true
    			},
    			$$inline: true
    		});

    	key = new Key({ $$inline: true });
    	key.$on("keypress", /*handleKeyPress*/ ctx[1]);

    	const block = {
    		c: function create() {
    			main = element("main");
    			div1 = element("div");
    			div0 = element("div");
    			create_component(display.$$.fragment);
    			t = space();
    			create_component(key.$$.fragment);
    			attr_dev(div0, "class", "card svelte-o0ie0i");
    			add_location(div0, file, 83, 4, 1745);
    			attr_dev(div1, "class", "container svelte-o0ie0i");
    			add_location(div1, file, 82, 2, 1716);
    			attr_dev(main, "class", "cor svelte-o0ie0i");
    			add_location(main, file, 81, 0, 1694);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, main, anchor);
    			append_dev(main, div1);
    			append_dev(div1, div0);
    			mount_component(display, div0, null);
    			append_dev(div0, t);
    			mount_component(key, div0, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const display_changes = {};
    			if (dirty & /*displayValue*/ 1) display_changes.value = /*displayValue*/ ctx[0];
    			display.$set(display_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(display.$$.fragment, local);
    			transition_in(key.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(display.$$.fragment, local);
    			transition_out(key.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(main);
    			destroy_component(display);
    			destroy_component(key);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('App', slots, []);
    	let displayValue = '0';
    	let digitoAtual = '';
    	let digitoAnterior = '';
    	let operacao = null;
    	let resultado = null;

    	function handleKeyPress(event) {
    		const key = event.detail;

    		if (key === 'C') {
    			clear();
    		} else if (key === '=') {
    			compute();
    		} else if (['+', '-', '*', '/'].includes(key)) {
    			Operacao(key);
    		} else {
    			if (digitoAtual == '+' || digitoAtual == '-' || digitoAtual == '*' || digitoAtual == '/') {
    				$$invalidate(2, digitoAtual = '');
    			}

    			$$invalidate(2, digitoAtual += key);
    		}
    	}

    	function Operacao(op) {
    		if (digitoAtual === '') {
    			return;
    		}

    		if (digitoAnterior !== '') {
    			compute();
    		}

    		$$invalidate(4, operacao = op);
    		$$invalidate(3, digitoAnterior = digitoAtual);
    		$$invalidate(2, digitoAtual = op);
    	}

    	function clear() {
    		$$invalidate(2, digitoAtual = '');
    		$$invalidate(3, digitoAnterior = '');
    		$$invalidate(4, operacao = null);
    		resultado = null;
    	}

    	function compute() {
    		const anterior = parseFloat(digitoAnterior);
    		const atual = parseFloat(digitoAtual);

    		switch (operacao) {
    			case '+':
    				resultado = anterior + atual;
    				break;
    			case '-':
    				resultado = anterior - atual;
    				break;
    			case '*':
    				resultado = anterior * atual;
    				break;
    			case '/':
    				resultado = anterior / atual;
    				break;
    			default:
    				return;
    		}

    		$$invalidate(2, digitoAtual = resultado.toString());
    		$$invalidate(4, operacao = null);
    		$$invalidate(3, digitoAnterior = '');
    	}

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Display,
    		Key,
    		displayValue,
    		digitoAtual,
    		digitoAnterior,
    		operacao,
    		resultado,
    		handleKeyPress,
    		Operacao,
    		clear,
    		compute
    	});

    	$$self.$inject_state = $$props => {
    		if ('displayValue' in $$props) $$invalidate(0, displayValue = $$props.displayValue);
    		if ('digitoAtual' in $$props) $$invalidate(2, digitoAtual = $$props.digitoAtual);
    		if ('digitoAnterior' in $$props) $$invalidate(3, digitoAnterior = $$props.digitoAnterior);
    		if ('operacao' in $$props) $$invalidate(4, operacao = $$props.operacao);
    		if ('resultado' in $$props) resultado = $$props.resultado;
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*digitoAtual, digitoAnterior, operacao*/ 28) {
    			$$invalidate(0, displayValue = digitoAtual || digitoAnterior || '0' || operacao);
    		}
    	};

    	return [displayValue, handleKeyPress, digitoAtual, digitoAnterior, operacao];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    const app = new App({
    	target: document.body,
    	props: {
    		name: 'world'
    	}
    });

    return app;

})();
//# sourceMappingURL=bundle.js.map
