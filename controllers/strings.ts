import { Request, Response, Router } from "express";

const router: Router = Router();

router.get("/hello-world", (req: Request, res: Response) => {
    res.send("Hello world at " + new Date())
});

router.get("/hello-variable/:nimi", (req: Request, res: Response) => {
    res.send("Hello " + req.params.nimi)
});

router.get("/add/:nr1/:nr2", (req: Request, res: Response) => {
    res.send(req.params.nr1 + req.params.nr2)
});

router.get("/multiply/:nr1/:nr2", (req: Request, res: Response) => {
    const nr1 = Number(req.params.nr1);
    const nr2 = Number(req.params.nr2);
    res.send((nr1 * nr2).toString());
});

router.get("/do-logs/:arv", (req: Request, res: Response) => {
    for (let index = 0; index < Number(req.params.arv); index++) {
        console.log("See on logi nr " + index);
    }
    res.send();
});

// Random Number
router.get("/number-gen/:nr1/:nr2", (req: Request, res: Response) => {
    const nr1 = Number(req.params.nr1);
    const nr2 = Number(req.params.nr2);
    let maxNumber = 0;
    let minNumber = 0;
    if(nr1>nr2){
        maxNumber = nr1;
        minNumber = nr2;
    } else{
        maxNumber = nr2
        minNumber = nr1;
    }
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    res.send("Random number between " + nr1 + " and " + nr2 + " is: " + randomNumber);
});

// Age calculator
router.get("/age/:sunniaasta", (req: Request, res: Response) => {
    const sunniaasta = Number(req.params.sunniaasta);
    const praeguneAasta = new Date().getFullYear();
    const vanus1 = praeguneAasta - sunniaasta;
    const vanus2 = vanus1 - 1;
    res.send("Oled " + vanus2 + " või " + vanus1 + " aastat vana, olenevalt kas sellel aastal on sünnipäev juba olnud");
});

export default router;