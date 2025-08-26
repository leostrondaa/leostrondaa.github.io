const userRepository = require('../repositories/userRepository');

class UserService {
  async createUser(userData) {
    try {
      return await userRepository.create(userData);
    } catch (error) {
      console.error('Erro no service:', error); // ← E isso
      throw error;
    }
  }

  getAllUsers() {
    return userRepository.findAll();
  }

  getUserById(id) {
    const user = userRepository.findById(parseInt(id));
    if (!user) {
      throw new Error('Usuário não encontrado.');
    }
    return user;
  }

  async getByEmail(email) {
    return userRepository.findByEmail(email);
  }

  updateUser(id, userData) {
    if (!userData.name && !userData.email) {
      throw new Error(
        'Pelo menos um campo (nome ou email) deve ser fornecido para atualização.'
      );
    }
    const updatedUser = userRepository.update(parseInt(id), userData);
    if (!updatedUser) {
      throw new Error('Usuário não encontrado para atualização.');
    }
    return updatedUser;
  }

  deleteUser(id) {
    const deleted = userRepository.delete(parseInt(id));
    if (!deleted) {
      throw new Error('Usuário não encontrado para exclusão.');
    }
    return { message: 'Usuário deletado com sucesso.' };
  }
}
module.exports = new UserService();
