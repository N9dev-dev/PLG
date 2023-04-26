const pls = [{
    pl: `"Can I buy you a drink? I’d like to see how good you are at swallowing."`,
    writer: `– Rizz God`
}, {
    pl: `"Kiss me if I’m wrong but, the earth is for sure flat."`,
    writer: `– The Rizzler`
}, {
    pl: `"You must be my lucky charm, because you’re magically delicious!"`,
    writer: `– Rizzard of Oz`
}, {
    pl: `"Hey, I’m sorry to bother you, but my phone must be broken because it doesn’t seem to have your number in it."`,
    writer: `– Rizz Khalifa`
}, {
    pl: `"Do you believe in love at first sight? Or, do I have to walk by again?"`,
    writer: `– Rizzley Bear`
}, {
    pl: `"Are you a toaster? Because I am looking for something to take a bath with tonight."`,
    writer: `– First Rizzponder`
}, {
    pl: `"You want to know my favorite tea? I’m looking at her, shawTea!"`,
    writer: `– Liam Rizzallagher`
}, {
    pl: `"It doesn’t matter to me what you’ve got in your pants. Just as long as you can take what’s in mine!"`,
    writer: `– Borizz Johnson`
}, {
    pl: `"Ow! I just bit my lip. Can you kiss it and make it better?"`,
    writer: `- Kamala Harizz`
}, {
    pl: `"I can’t taste my cherry lip gloss! Can you give it a try?"`,
    writer: `- Adolf Rizzler`
}, {
    pl: `"Hey boy, want to play shark attack? You eat! I-scream!"`,
    writer: `– Therizza May`
}, {
    pl: `"I’m so jealous of your heart right now, because it’s pounding inside of you and I’m not."`,
    writer: `– Osama Rizz Laden`
}, {
    pl: `"Is that a beaver I see, because GOD DAM!"`,
    writer: `– Rizzi Sunak`
}, {
    pl: `"I’m not quite Jesus, I’m more of an apostle. I could never turn water into wine. But I bet I can turn you into mine."`,
    writer: `– Rizzasouras Rex`
}, {
    pl: `"I don’t care if you’re vegan. I got the only meat you’ll ever need."`,
    writer: `– Alvin and the Rizzmunks`
}, {
    pl: `"If you were a room in my house I’d make you the basement. So I could put kids inside you."`,
    writer: `– Lightning Mcrizz`
}, {
    pl: `"Are you from France? Cause MaDAMN you fine!"`,
    writer: `– Charizzard`
}, {
    pl: `"I’m no cashier but you got a couple things on you I’d like to check out!"`,
    writer: `- Sonic the Rizzhog`
}, {
    pl: `"When I was a kid I used to have to chase butterflies. Now you’re over here bringing them right to me."`,
    writer: `- Harizz Styles`
}, {
    pl: `"You want to know why I’m always thinking about you? Because my mom told me to think about my future."`,
    writer: `- Chrizz Brown`
}, ]





let btn = document.querySelector("#Pbtn");

let pl = document.querySelector(".pl");

let writer = document.querySelector(".writer");






btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * pls.length);
    
    
    pl.innerHTML = pls[random].pl;

    
    writer.innerHTML = pls[random].writer;
})