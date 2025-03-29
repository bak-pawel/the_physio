package register;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import java.util.List;


@Path("/getUsers")
public class Register {

    @Inject
    Wrapper wrapper;
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<User> getUsers() {
        return wrapper.getAllUsers();
    }
}
