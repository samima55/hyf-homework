
function findDanishLetter(danishString) {
    const Danishletter = { count: 0, å: 0, ø: 0, æ: 0 };
    const wordArray = danishString.split("");
    const result = {};
    for (item of wordArray) {
        if (item === 'å') {
            Danishletter.count += 1;
            Danishletter.å += 1;
        }
        else if (item === 'ø') {
            Danishletter.count += 1;
            Danishletter.ø += 1;
        }
        else if (item === 'æ') {
            Danishletter.count += 1;
            Danishletter.æ += 1;
        }
    }
    for (const item in Danishletter) {
        if (Danishletter[item] === 0) {
            delete Danishletter[item];
        }
    }

    console.log(Danishletter);
}
const danishString = "Jeg har en blå bil";
findDanishLetter(danishString);
const danishString2 = "Blå grød med røde bær";
findDanishLetter(danishString2);

