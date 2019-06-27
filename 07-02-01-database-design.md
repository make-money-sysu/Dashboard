# Dataset of Tinny Hippo


## 1 ER模型

![ER模型](https://i.loli.net/2019/06/27/5d147c324d3d219954.png)



## 2 关系模型

- 顾客 : 订单 = 1 : N

  顾客 ( <u>**顾客ID**</u>, 顾客NAME )

  订单 ( <u>**订单ID**</u>, 总价, 选菜信息, 订单状态, 备注 )

  下单 ( <u>**顾客ID**</u>,  订单ID, 时间, 桌号)

  - **主键**: 顾客ID
  - **外键**: 订单ID

- 顾客 : 菜单 = N : M

  顾客 ( <u>**顾客ID**</u>, 顾客NAME )

  菜单 ( <u>**菜ID**</u>, 菜名, 类别, 价格, 描述, 图片 )

  选择 (<u>**顾客ID**</u>, <u>**菜ID**</u>, 数量)

  - **复合主键**: 顾客ID, 菜ID
  - **外键**: 顾客ID, 菜ID

- 商家 : 订单 = 1 : N

  商家 ( <u>**商家ID**</u>, 商家NAME, 商家PASSWORD )

  订单 ( <u>**订单ID**</u>, 总价, 选菜信息, 订单状态, 备注 )

  管理2 ( <u>**商家ID**</u>,  订单ID)

  - **主键**: 商家ID
  - **外键**: 订单ID

- 商家 : 菜单 = 1 : N

  商家 ( <u>**商家ID**</u>, 商家NAME, 商家PASSWORD )

  菜单 ( <u>**菜ID**</u>, 菜名, 类别, 价格, 描述, 图片 )

  管理1 ( <u>**商家ID**</u>,  菜ID)

  - **主键**: 商家ID
  - **外键**: 菜ID

  ​

## 3 数据库物理模型

- **user**

  | Field         | Type        | Key  | Description          |
  | ------------- | ----------- | ---- | -------------------- |
  | id   | int         | PRI  | The ID of user   |
  | password  | varchar(40) |      | The password of user |
  | real_name   | varchar(40) |      | The real_name of user |
  | nick_name   | varchar(40) |      | The nick_name of user |
  | age   | smallint unsigned |      | The age of user |
  | gender   | char(1) |      | The gender of user |
  | head_picture  | blob  |      | The head_picture of user |
  | balance   | float  |      | The balance of user |
  | profession   | varchar(40) |      | The profession of user |
  | grade   | varchar(20) |      | The grade of user |
  | phone   | varchar(20) |      | The phone of user |
  | email   | varchar(40) |      | The email of user |

- **survey**

  | Field       | Type        | Key  | Description            |
  | ----------- | ----------- | ---- | ---------------------- |
  | id   | int unsigned         | PRI  | The ID of seller       |
  | publisher_id  | int unsigned |      | The publisher_id of seller     |
  | title   | varchar(40) |      | The title of seller |
  | content    | varchar(1000) |      | The content of seller |
  | state    | int |      | The state of seller |
  | checked    | int |      | The checked of seller |
  | create_time    | datetime |   FKey   | The create_time of seller |


- **do_survey**

  | Field      | Type         | Key  | Description               |
  | ---------- | ------------ | ---- | ------------------------- |
  | survey_id     | int          |   PRI  | The survey_id of food     |
  | recipient_id  | varchar(20)  |   PRI  | The recipient_id of food  |
  | content       | varchar(20)  |        | The content of food       |


- **friends**

  | Field         | Type | Key  | Description          |
  | ------------- | ---- | ---- | -------------------- |
  | fid	   | int  |   | The fid of customer   |
  | user1_id    int    | PRI  |      | The user1_id of order      |
  | user2_id  | int  |  PRI    | The user2_id of ordering |
  | accepted       | boolean   |      | The accepted of table      |


- **package**

  | Field       | Type | Key  | Description                 |
  | ----------- | ---- | ---- | --------------------------- |
  | id  | int  | PRI  | The ID of customer          |
  | owner_id      | int  | PRI  | The owner_id of food              |
  | receiver_id     | int  |   FKey   | The receiver_id of selected food |
   | create_time  | datetime  |  | The create_time of customer          |
   | reward  | float   |   | The reward of customer          |
   | state  | int  |  | The state of customer          |
    | note  | varchar(200)  | | The note of customer          |



- **msg**

  | Field     | Type | Key  | Description      |
  | --------- | ---- | ---- | ---------------- |
  | mid  | int  | PRI  | The mid of seller |
  | fromid    | int  |      | The fromid of food   |
  | toid    | int  |      | The toid of food   |
  | create_time    | datetime  |      | The create_time of food   |
  | state    | int  |      | The state of food   |
  | content    | varchar(140)  |      | The content of food   |

