const {Builder, Capabilities, By} = require('selenium-webdriver');
require('chromedriver');
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();


beforeAll(async() =>{
    await driver.get('http://127.0.0.1:51355/movieList/index.html')
})

afterAll(async() =>{
    await driver.quit()
})


describe('Deleting a movie after it has been added will populate a message stating said movie was deleted', ()=>{
    test('I can add a movie to our list', async ()=>{
        let addMovie = await driver.findElement(By.xpath('/html/body/main/section/form/input'))
    
        await addMovie.sendKeys('Creed\n')
    
        await driver.sleep(3000)
    })

    test('I can delete a movie', async()=>{
        let deleteMovie= await driver.findElement(By.xpath('/html/body/main/ul/li/button'))

        deleteMovie.click()

        await driver.sleep(3000)
    })
    test('Message states "Creed deleted!" ', async()=>{
        let deleteMessage = await driver.findElement(By.xpath('/html/body/main/aside'))


        await driver.sleep(3000)
    })

})