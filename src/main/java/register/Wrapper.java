package register;

import jakarta.enterprise.context.ApplicationScoped;

import java.util.List;

@ApplicationScoped
public class Wrapper {
    public List<User> getAllUsers() {
        return User.listAll();
    }
}
