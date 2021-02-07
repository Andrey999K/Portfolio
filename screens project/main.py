#!/usr/bin/env python3
import asyncio
import pyppeteer  # $ pip install pyppeteer

async def main(url, width, heigth, name):    
    browser = await pyppeteer.launch()
    page = await browser.newPage()
    await page.goto(url)
    await page.setViewport(dict(width=width, height=heigth))
    await page.screenshot(path="{}.png".format(name), fullPage=False)
    await browser.close()

url = input("Введите url-сайта: ")
width = int(input("Введите ширину скрина: "))
heigth = int(input("Введите высоту скрина: "))
name = input("Введите имя картинки: ")

asyncio.get_event_loop().run_until_complete(main(url, width, heigth, name))