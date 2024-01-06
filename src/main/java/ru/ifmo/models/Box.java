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
    private BoxStatus status;
}
