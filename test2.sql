-- Aufgabe company

/*
Weiterlieferant | City | Lieferant
*/
SELECT sup.suppno WEITERERLIEFERANT, subsup.CITY, subsup.suppno AS LIEFERANT
FROM supplier as sup
         JOIN
         (SELECT CITY, suppno from supplier where suppno = 'S1' or suppno = 'S2') as subsup on sup.CITY = subsup.CITY
WHERE sup.suppno NOT IN ('S1', 'S2');

/*
EmpName | Job | Salary
*/
SELECT EMPNAME, JOB, SALARY
FROM emp
WHERE JOB = 'ANALYST'
  AND EMPNAME <> 'FORD';

/*
Sal | Job | Empname | Deptno
*/
SELECT SALARY, JOB, EMPNAME, DEPTNO
FROM emp
WHERE SALARY > (SELECT max(SALARY) from emp WHERE DEPTNO = 30)
ORDER BY SALARY DESC;

/*
Empname | Job
*/
SELECT EMPNAME, JOB
FROM emp
WHERE JOB = ANY (SELECT JOB FROM emp WHERE DEPTNO = 30)
  AND DEPTNO = 10
