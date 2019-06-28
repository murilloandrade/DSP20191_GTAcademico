package br.inf.ufg.gtacademico;

import br.inf.ufg.gtacademico.model.Role;
import br.inf.ufg.gtacademico.model.RoleName;
import br.inf.ufg.gtacademico.model.User;
import br.inf.ufg.gtacademico.repository.RoleRepository;
import br.inf.ufg.gtacademico.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Component
public class CommandLineAppStartupRunner implements CommandLineRunner {
    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    RoleRepository roleRepository;

    @Override
    public void run(String...args) throws Exception {
        if (userRepository.findAll().size() == 0) {

            User admin = new User();
            admin.setEmail("admin@gtacadmico.com");
            admin.setName("Admin");
            admin.setUsername("admin");
            admin.setPassword( encoder.encode("123456"));
            Set<Role> roles = new HashSet<>();
            admin.setRoles(roles);

            roleRepository.save(new Role(RoleName.ROLE_ADMIN));
            roles.add(roleRepository.findByName(RoleName.ROLE_ADMIN));
            userRepository.save(admin);

        }


    }
}