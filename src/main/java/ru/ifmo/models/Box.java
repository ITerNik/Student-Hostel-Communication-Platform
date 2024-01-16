package ru.ifmo.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.ifmo.entities.BoxStatus;

@Entity
@Table(name = "box")
@Data
@NoArgsConstructor
public class Box {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Enumerated
    private BoxStatus status;

    /*@ManyToOne
    @JoinColumn(name = "owner_id", referencedColumnName = "id")*/
    @Column(name = "owner_id")
    private long owner;
}
