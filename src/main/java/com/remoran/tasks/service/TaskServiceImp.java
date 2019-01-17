package com.remoran.tasks.service;

import com.remoran.tasks.domain.Task;
import com.remoran.tasks.repository.TaskRepository;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImp implements TaskService {

    private TaskRepository taskRepository;

    public TaskServiceImp(TaskRepository taskRepository){
        this.taskRepository = taskRepository;
    }

    @Override
    public Iterable<Task> list() {
        return this.taskRepository.findAll();
    }

    @Override
    public Task save(Task task) {
        return this.taskRepository.save(task);
    }
}
