let users = [];
let currentId = 1;

class UserRepository{
    create(user){
        const newUser = {id: currentId++, ...user};
        users.push(newUser);
        return newUser;
    }

    findAll(){
        return users;
    }

    findById(){
        return users.find(user => user.id === id)
    }

    update(id, updateUser){
        const index = usewrs.findIndex(user => user.id === id);

        if(index !== -1){
            users[index] = {...users[index], ...updatedUser, id: id}
            return users[index]
        }
        return null
    }

    delete(id){
        const initialLength = users.length;
        users = users.flter(user => user.id !== id);
        return users.length < initialLength;
    }
}
module.exports = new UserRepository();
