package ru.ifmo.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.ifmo.entities.UserPrivilege;

@Entity
@Table(name = "credentials")
@Data
@NoArgsConstructor
public class Credentials {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    /*@OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")*/
    @Column(name = "user_id")
    private int user;

    @Enumerated
    private UserPrivilege privilege;

    @NotEmpty
    @Size(min = 5, max = 50)
    private String username;
    private String password;
}
