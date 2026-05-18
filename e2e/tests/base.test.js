const { Builder, By, Key, until } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const fs = require('fs')
const path = require('path')

const BASE_URL = process.env.APP_URL || 'http://localhost:3000'
const SCREENSHOTS_DIR = path.join(__dirname, '..', 'screenshots')

// garante que o diretorio existe e se nao cria-o
if (!fs.existsSync(SCREENSHOTS_DIR)) fs.mkdirSync(SCREENSHOTS_DIR, {recursive: true})

async function tiraFoto(name){
    try{
        
    }
    catch(err){
        console.warn('Erro ao tirar foto')
    }
}