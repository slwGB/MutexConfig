# MutexConfig
动态解析互斥配置文件，生成互斥规则对象
## 注意
mockProps 所有的状态集合
mutexConfigDemo 规则配置文件，生成每个状态的互斥
- getMutex函数mockProps中的每个key与mutexConfigDemo的key对应
- 每个key对应一条规则
- 规则中的每个变量需要在mockProps中
