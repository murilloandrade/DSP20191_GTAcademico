package br.inf.ufg.gtacademico.security.services;

import br.inf.ufg.gtacademico.model.Diciplina;
import br.inf.ufg.gtacademico.repository.DiciplinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiciplinaServiceImpl implements DiciplinaService {

    @Autowired
    DiciplinaRepository repository;

    @Override
    public Diciplina create(Diciplina diciplina) {
        return repository.save(diciplina);
    }

    @Override
    public Diciplina delete(Long id) {
        Diciplina diciplina = findById(id);
        if(diciplina != null){
            repository.delete(diciplina);
        }
        return diciplina;
    }

    @Override
    public List<Diciplina> findAll() {
        return repository.findAll();
    }

    @Override
    public Diciplina findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public Diciplina update(Diciplina diciplina) {
        return repository.save(diciplina);
    }
}
