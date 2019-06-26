package br.inf.ufg.gtacademico.security.services;


import br.inf.ufg.gtacademico.model.Diciplina;

import java.util.List;

public interface DiciplinaService {

    Diciplina create(Diciplina diciplina);

    Diciplina delete(Long id);

    List<Diciplina> findAll();

    Diciplina findById(Long id);

    Diciplina update(Diciplina diciplina);
}
