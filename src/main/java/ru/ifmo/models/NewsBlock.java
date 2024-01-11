package ru.ifmo.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "news")
@Data
@NoArgsConstructor
public class NewsBlock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String header;

    @Column(name = "date")
    private LocalDateTime publishDate;
    private String description;

    /*@ManyToOne
    @JoinColumn(name = "author_id", referencedColumnName = "id")*/
    @Column(name = "author_id")
    private long author;
}
