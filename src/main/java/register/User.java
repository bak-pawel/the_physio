package register;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

import java.util.UUID;

@Entity
@Data
@Table(name = "users")
public class User extends PanacheEntityBase {
    @Id
    @Column(name = "id", columnDefinition = "UUID")
    private UUID id;


    @Column(name = "name")
    public String name;

    @Column(name = "surname")
    public String surname;

    @Column(name = "phone")
    public String phone;

    @Column(name = "mail")
    public String mail;

    @Column(name = "city")
    public String city;

    @Column(name = "postcode")
    public String postcode;

    @Column(name = "street")
    public String street;

    @Column(name = "buildingnumber")
    public String buildingnumber;

    @Column(name = "flatnumber")
    public String flatnumber;

    @Column(name = "login")
    public String login;

    @Column(name = "password")
    public String password;


}
