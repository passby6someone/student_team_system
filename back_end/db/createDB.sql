CREATE TABLE person(
    id INT NOT NULL AUTO_INCREMENT  COMMENT 'id' ,
    username VARCHAR(32)    COMMENT '账号' ,
    password VARCHAR(32)    COMMENT '密码' ,
    name VARCHAR(32)    COMMENT '姓名' ,
    skill VARCHAR(1024)    COMMENT '技能' ,
    introduction VARCHAR(1024)    COMMENT '自我介绍' ,
    school VARCHAR(32)    COMMENT '学校' ,
    major VARCHAR(32)    COMMENT '专业' ,
    email VARCHAR(32)    COMMENT '邮箱' ,
    isLookforteam CHAR(1)    COMMENT '找队伍' ,
    PRIMARY KEY (id),
    UNIQUE (username)
) COMMENT = ' ';

CREATE TABLE team(
    id INT NOT NULL AUTO_INCREMENT  COMMENT 'id' ,
    name VARCHAR(256)    COMMENT '小队名称' ,
    introduction VARCHAR(1024)    COMMENT '简介' ,
    industry VARCHAR(32)    COMMENT '行业' ,
    school VARCHAR(32)    COMMENT '学校' ,
    isLookforperson VARCHAR(1)    COMMENT '是否招人' ,
    PRIMARY KEY (id)
) COMMENT = ' ';

CREATE TABLE t_p(
    team_id INT NOT NULL   COMMENT '队伍id',
    person_id INT NOT NULL    COMMENT '成员id',
    isCaptain VARCHAR(1)    COMMENT '是队长' ,
    FOREIGN KEY (team_id) REFERENCES team(id),
    FOREIGN KEY (person_id) REFERENCES person(id)
) COMMENT = '个人队伍表 ';

CREATE TABLE project(
    id INT NOT NULL AUTO_INCREMENT  COMMENT 'id' ,
    name VARCHAR(256)    COMMENT '项目名称' ,
    school VARCHAR(32)    COMMENT '所属学校' ,
    type VARCHAR(32)    COMMENT '所属领域' ,
    introduction VARCHAR(1024)    COMMENT '项目概述' ,
    team_id INT NOT NULL   COMMENT '所属团队' ,
    isLookforperson VARCHAR(1)    COMMENT '是否招人' ,
    PRIMARY KEY (id),
    FOREIGN KEY (team_id) REFERENCES team(id)
) COMMENT = ' ';

CREATE TABLE t_c(
    team_id INT NOT NULL   COMMENT '队伍id' ,
    competition VARCHAR(32)    COMMENT '比赛类型' ,
    FOREIGN KEY (team_id) REFERENCES team(id)
) COMMENT = '队伍比赛表 ';