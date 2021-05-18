#!/bin/sh
#echo "暂停更新配置，不要尝试删掉这个文件，你的容器可能会起不来"
#echo '' >/scripts/logs/pull.lock

echo "定义定时任务合并处理用到的文件路径..."
defaultListFile="/scripts/docker/$DEFAULT_LIST_FILE"
echo "默认文件定时任务文件路径为 ${defaultListFile}"
mergedListFile="/scripts/docker/merged_list_file.sh"
echo "合并后定时任务文件路径为 ${mergedListFile}"

echo "第1步将默认定时任务列表添加到并后定时任务文件..."
cat $defaultListFile >$mergedListFile

echo "第2步判断是否存在自定义任务任务列表并追加..."

echo "第4步判断是否配置自定义shell执行脚本..."
if [ 0"$CUSTOM_SHELL_FILE" = "0" ]; then
  echo "未配置自定shell脚本文件，跳过执行。"
else
  if expr "$CUSTOM_SHELL_FILE" : 'http.*' &>/dev/null; then
    echo "自定义shell脚本为远程脚本，开始下载自定义远程脚本。"
    wget -O https://raw.githubusercontent.com/nxppru/myjdsigin/main/jddj_shell_script_mod.sh $CUSTOM_SHELL_FILE
    echo "下载完成，开始执行..."
    echo "#远程自定义shell脚本追加定时任务" >>$mergedListFile
    sh -x /scripts/jddj_shell_script_mod.sh
    echo "自定义远程shell脚本下载并执行结束。"
  else
    if [ ! -f $CUSTOM_SHELL_FILE ]; then
      echo "自定义shell脚本为docker挂载脚本文件，但是指定挂载文件不存在，跳过执行。"
    else
      echo "docker挂载的自定shell脚本，开始执行..."
      echo "#docker挂载自定义shell脚本追加定时任务" >>$mergedListFile
      sh -x $CUSTOM_SHELL_FILE
      echo "docker挂载的自定shell脚本，执行结束。"
    fi
  fi
fi


echo "第6步设定下次运行docker_entrypoint.sh时间..."
echo "删除原有docker_entrypoint.sh任务"
sed -ie '/'docker_entrypoint.sh'/d' ${mergedListFile}

# 12:00前生成12:00后的cron，12:00后生成第二天12:00前的cron，一天只更新两次代码
if [ $(date +%-H) -lt 12 ]; then
  random_h=$(($RANDOM % 12 + 12))
else
  random_h=$(($RANDOM % 12))
fi
random_m=$(($RANDOM % 60))

echo "设定 docker_entrypoint.sh cron为："
echo -e "\n# 必须要的默认定时任务请勿删除" >>$mergedListFile
echo -e "${random_m} ${random_h} * * * docker_entrypoint.sh >> /scripts/logs/default_task.log 2>&1" | tee -a $mergedListFile
