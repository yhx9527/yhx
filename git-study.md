# git命令相关

标签（空格分隔）： 未分类

---

 - 添加远程仓库
    git remote add origin 远程仓库地址(https://github.com/xxxx.git)

- 获取远程仓库最新代码并合并到本地
    (git remote -v)查看远程版本
    **git fetch origin master  获取远端origin/masterz分支**
    (git log -p master..origin/master)查看差异
    -p 选项表示按补丁格式显示每个更新之间的差异。
    **git merge origin/master 合并分支**

 - 当合并时出现fatal: refusing to merge unrelated histories错误时表示两个分支没有取得联系，我是发生在第一次新建远程仓库时，添加了readme文件，而本地没有，这时我想把它拉到本地进行合并，这时发生错误
 ***解决方案***: 命令最后加上 --allow-unrelated-histories
