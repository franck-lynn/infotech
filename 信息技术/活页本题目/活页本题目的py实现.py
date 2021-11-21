

inputs = ["01-8", "02-20", "01-1", "01-3", "01-4", "01-5",
          "02-18", "01-9", "02-3", "02-4", "02-5", "02-10"]
a = []  # a 数组 保存的是 页码
b = []  # b 数组 保存的是第几本活页

sum = len(inputs)

for i in range(sum):
    # 让 for 循环从1开始, 与 vb 里保持一致, py 数组是从0开始, 
    # 所以取出的时候要调整一下
    inp = inputs[i].split("-")
    a.append(int(inp[0]))  # 获取输入的活页本号
    b.append(int(inp[1]))

