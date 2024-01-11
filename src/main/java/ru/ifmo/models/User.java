package ru.ifmo.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.ifmo.entities.UserPrivilege;

import java.util.List;

@Entity
@Table(name = "user")
@Data
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String surname;

    @Enumerated
    private UserPrivilege privilege;

    @OneToMany(mappedBy = "author", cascade = CascadeType.PERSIST)
    private List<Product> products;

    @OneToMany(mappedBy = "owner", cascade = CascadeType.PERSIST)
    private List<Box> boxes;

    @OneToMany(mappedBy = "author", cascade = CascadeType.PERSIST)
    private  List<NewsBlock> relatedNews;
}
