#!/usr/bin/env python3
import asyncio
import pyppeteer  # $ pip install pyppeteer
import json


async def main(url, width, heigth, name):    
    browser = await pyppeteer.launch()
    page = await browser.newPage()
    await page.goto(url)
    await page.setViewport(dict(width=width, height=height))
    await page.screenshot(path="{}".format(name), fullPage=False)
    await browser.close()


data = []
with open('../app/data/projects.json') as f:
    data.append(json.load(f))

# for item in data[0]:
url = data[0][-1]['link']
width = 1403
height = 781
formatImage = "jpg"
name = data[0][-1]['name'].lower().split(" ")
name = "-".join(name)
name += "-1440." + formatImage
print(name)
asyncio.get_event_loop().run_until_complete(main(url, width, height, name))

# url = input("Введите url-сайта: ")
# width = int(input("Введите ширину скрина: "))
# heigth = int(input("Введите высоту скрина: "))

# name = input("Введите имя картинки: ")



