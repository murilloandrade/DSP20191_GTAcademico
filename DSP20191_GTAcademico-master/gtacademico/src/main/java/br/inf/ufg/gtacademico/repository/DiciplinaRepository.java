package  br.inf.ufg.gtacademico.repository;

import  br.inf.ufg.gtacademico.model.Diciplina;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface DiciplinaRepository extends Repository<Diciplina, Integer> {

    Diciplina save(Diciplina diciplina);

    List<Diciplina> findAll();

    Diciplina findById(Long id);

    void delete(Diciplina diciplina);
}
