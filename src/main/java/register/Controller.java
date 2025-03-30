package register;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import java.util.List;
import java.util.UUID;

@Path("register")
public class Controller {

    @Inject
    Wrapper wrapper;
    @GET
    @Path("getUsers")
    @Produces(MediaType.APPLICATION_JSON)
    public List<User> getUsers() {
        return wrapper.getAllUsers();
    }

    @POST
    @Path("addUser")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public UserCreationStatus addUser(User user) {
        return wrapper.addUser(user);
    }
}
