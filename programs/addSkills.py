import json

class Skill:
    name = ""
    rating = 0

    def __init__(self, name, rating):
        self.name = name
        self.rating = rating

text = []

try:
    f = open('../app/data/skills.json', 'r')
    fileText = f.read()
    try:
        text = json.loads(fileText)
    except:
        pass
    f.close()
except:
    pass

name = input("Название технологии (навыка): ").upper().replace(" ", "")
while True:
    try:
        rating = int(input("Рейтинг: "))
        break
    except:
        print("Введите число!")
while rating < 1 or rating > 5:
    print("Рейтинг не может быть ниже 1 или выше 5 звёзд!")
    rating = int(input("Рейтинг: "))


skill = Skill(name, rating)

text.append(skill.__dict__)

text = json.dumps(text, indent = 4)
# print(text)

f = open('../app/data/skills.json', 'w')
f.write(text + '\n')
f.close()