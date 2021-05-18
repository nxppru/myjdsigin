#!/bin/sh
set -e

#获取配置的自定义参数
if [ -n "$1" ]; then
  run_cmd=$1
fi

(
if [ -f "/scripts/logs/pull.lock" ]; then
  echo "存在更新锁定文件，跳过git pull操作..."
else
  echo "设定远程仓库地址..."
  cd /scripts
  git remote set-url origin "$REPO_URL"
  git reset --hard
  echo "git pull拉取最新代码..."
  git -C /scripts pull --rebase
  echo "npm install 安装最新依赖"
  npm install --prefix /scripts
  wget https://raw.githubusercontent.com/nxppru/myjdsigin/main/default_task.sh
fi
) || exit 0


echo "------------------------------------------------执行定时任务任务shell脚本------------------------------------------------"
#测试
# sh /scripts/default_task.sh "$ENABLE_BOT_COMMAND" "$run_cmd"
#合并
sh /scripts/docker/default_task.sh "$ENABLE_BOT_COMMAND" "$run_cmd"
echo "--------------------------------------------------默认定时任务执行完成---------------------------------------------------"
