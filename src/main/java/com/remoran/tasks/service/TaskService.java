package com.remoran.tasks.service;

import com.remoran.tasks.domain.Task;

public interface TaskService {

    Iterable<Task> list();

    Task save(Task task);
}
