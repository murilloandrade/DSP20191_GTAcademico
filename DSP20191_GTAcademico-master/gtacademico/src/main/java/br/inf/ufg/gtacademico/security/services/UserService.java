package br.inf.ufg.gtacademico.security.services;

import br.inf.ufg.gtacademico.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    User create(User user);

    List<User> findAll();

    Optional<User> findById(Long id);

    User findByName(String name);

    User update(User user);
}
