# coding=utf-8
import os


def handler(event, context):
    if not os.path.exists("/mnt/auto/sd/.kodbox-1.35.031"):
        os.system(
            "wget http://images.devsapp.cn/application/kodbox/kodbox-1.35.031.zip -O /mnt/auto/sd/kodbox-1.35.031.zip")
        os.system(
            "cd /mnt/auto/sd && unzip kodbox-1.35.031.zip && mv kodbox-1.35.031 .kodbox-1.35.031 && rm kodbox-1.35.031.zip && cd -")
    return "nas init"





