package register;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;

import java.util.List;

@ApplicationScoped
public class Wrapper {
    public List<User> getAllUsers() {
        return User.listAll();
    }

    @Transactional
    public UserCreationStatus addUser(User user) {
        UserCreationStatus userUnique = isUserUnique(user.login, user.mail);
        if (userUnique == UserCreationStatus.SUCCESS) {
            user.persist();
            return userUnique;
        } else {
            return userUnique;
        }
    }

    public UserCreationStatus isUserUnique(String login, String mail) {
        boolean isLoginUnique = User.find("login", login).firstResult() == null;
        boolean isMailUnique = User.find("mail", mail).firstResult() == null;

        if (!isLoginUnique && !isMailUnique) {
            return UserCreationStatus.DUPLICATE_EMAIL_AND_LOGIN;
        } else if (!isLoginUnique) {
            return UserCreationStatus.DUPLICATE_LOGIN;
        } else if (!isMailUnique) {
            return UserCreationStatus.DUPLICATE_EMAIL;
        } else {
            return UserCreationStatus.SUCCESS;
        }
    }
}