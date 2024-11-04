package aptrue.backend.Apartment.Entity;


import aptrue.backend.Admin.Entity.Admin;
import jakarta.persistence.*;
import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "apartment")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class Apartment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "apt_id")
    private int aptId;

    @NotNull
    @Column(name = "apt_name", unique = true, length = 100)
    private String aptName;

    @NotNull
    @Column(name = "address", unique = true, length = 100)
    private String address;

    @Column(name = "houseCount")
    private int houseCount;

    @OneToMany(mappedBy = "apartment", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Admin> adminList = new ArrayList<>();

}
