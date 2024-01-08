package ru.ifmo.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "product")
@Data
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private double price;
    private String description;
    private String image;
    @ManyToOne
    @JoinColumn(name = "author_id", referencedColumnName = "id")
    private User author;
}
