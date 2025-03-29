package register;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "test")
public class Test extends PanacheEntity {

    @Column(name = "id")
    Long id;
    @Column(name = "name")
    String name;

}
