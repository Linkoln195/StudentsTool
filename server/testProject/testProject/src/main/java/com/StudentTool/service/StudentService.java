package com.StudentTool.service;

import com.StudentTool.model.Student;
import com.StudentTool.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

    public List<Student> findAllStudents() {
        return repository.findAll();
    }

    public Student addStudent(Student student) {
        student.setStudentId(UUID.randomUUID().toString().split("-")[0]);
        return repository.save(student);
    }

    public String deleteStudent(String studentId) {
        repository.deleteById(studentId);
        return studentId + " deleted from database";
    }
}
