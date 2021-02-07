import json

class Project:
    name = ""
    link = ""
    image = ""
    alt = ""

    def __init__(self, name, link, image, alt):
        self.name = name
        self.link = link
        self.image = image
        self.alt = alt

text = []

try:
    f = open('app/data/data.json', 'r')
    fileText = f.read()
    try:
        text = json.loads(fileText)
    except:
        pass
    f.close()
except:
    pass

name = input("Введите название: ")
link = input("Введите ссылку: ")
image = input("Введите путь к изображению: ")
alt = input("Введите alt: ")

project = Project(name, link, image, alt)

text.append(project.__dict__)

text = json.dumps(text, indent = 4)
# print(text)

f = open('app/data/data.json', 'w')
f.write(text + '\n')
f.close()