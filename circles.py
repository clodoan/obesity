# 1 through 8
for i in range(1, 9):
    with open ("circle-"+ str(i) + ".svg", "w") as f:
         f.write("<svg height='8' width='8'> <circle cx='4' cy='4' r='" + str(i/2) + "' fill='#224444' /> </svg>")
