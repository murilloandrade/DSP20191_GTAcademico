package  br.inf.ufg.gtacademico.repository;

import br.inf.ufg.gtacademico.model.Role;
import br.inf.ufg.gtacademico.model.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByName(RoleName roleName);
}
