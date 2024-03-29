

// get elements by their ID
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', function () {
    // get the search input value
    const searchTerm = searchInput.value;
    // do something with the search term (e.g. redirect to a search results page)
    console.log(`Searching for "${searchTerm}"...`);

    var text1 = document.getElementById("textField");
    text1.style.display = "block";
    const rawData = `{
        "90019305150":"D8FA8C69F4364EB96152EC0E58F4519B855C0F54A98C0F66F7D2A8519549D03E",
       
        "A90019302002":"0E091E941C64D1D84D2856979FB7E19B734173970CFD3DB6E2B0F47B08BE7839",

        "A90019302005":"9A159D3DA0B88AB81A3C29B3379EAC954C7CE6F514D1FBDC5B31F9987B328A3A",

        "A90019302007":"B04146FE7DEEC11F5A23304DB5DCD0009DB4517DF6EDF296871B7A8A738F0491",

        "A90019302012":"0233266984AE2C38F5D42333F0C118EC64BA4377445F28C6657606CFAF266557",

        "A90019302013":"8FBE785B5DC49ECBFD34B5439BC3808B9C3D0096EBCBA668B38407EEFBF471A3",

        "A90019302014":"3EC64C5D58BCA45A97B3A73BF1EC70168BCF6A891BF02ED153BAF5BBF74FEE2E",

        "A90019302016":"47C9D59007A9F55DD46FB473A774C318453A2065AB8EC8B598AC846002F3B41F",

        "A90019302020":"72E60059ABFDB6440D8B71A13931FDE8559A582CEA65BE45037348C73CC1A0EC",

        "A90019302022":"5864E99AF9D5E4EA74BBCBE594B618283DFAAC82677F96D65C4D74756E5064FE",

        "A90019302024":"150D9006ABE40076D42270EA98719907FC81BEE5214824B0B933C5A70F574AE8",

        "A90019302026":"DAD84F0E59AFB249E333E0BC88764B2EE8D318F8532B1241FF36D124D7B2DA83",

        "A90019302029":"C86BD72FA201C354B0EEFC4F5792D42385811A2BB9B19ADC0E15F1DDC1CE0D62",

        "A90019302030":"9A7C3EFF94DFE5F5631323E968F71E5D4CB45F86BA8BD6BFD975C513953576F7",

        "A90019302031":"2CCC5BF315EC3D84D173A4D890A9A67AE9C4D7EFE62801C3D3C0EC942AD8E979",

        "A90019302037":"FA224DED829F21E5A1B18E3463D687653BAF6F1919EEDB25129850A987CBE936",

        "A90019302038":"374B8947245C2EB414A7D180D1935C8B4F139BDAE6733441EF179CC075980499",

        "A90019302039":"7D1A6637715F03944E67BA7B9BB8D92CC4C83037830B6C4F4548B872D00DB3E7",

        "A90019302040":"AA991B7C66952A512A6EA8892931077F382BABEC3EA9931ADB763023065D6572",

        "A90019302041":"516A3007A2B4277CB4A54EE6CEF97203D1C8A77950B46CC11952EB2297C5612C",

        "A90019302042":"DBF3B7EF8FF79879C7D0645594B2F368E3C94AC689BB8286C2E06E70F34D1DBA",

        "A90019302043":"962E7DC5E43DEB0CB9AC7DBF0864CFF50173D8709BF568322441ACCDAEBF16B9",

        "A90019302045":"7F7ADFE34593058A98F5EF767DEF448F491B836F943F867D6E85C7E43BC6866A",

        "A90019302046":"F24DDBC8D81C6F64DDCC9315D00C51326A9617D8CD3E343F62DC50265BC16649",

        "A90019302047":"595A2227EDCC51098D0A7EC6712BE1D7CA33BECE7A699D3ECA809A20EA0F6A09",

        "A90019302048":"2EF819FB6DD56CD2E6626A22A78A32E831F927AA1001CBB31929FF35095F35A0",

        "A90019302050":"F17B363D44BDBE1C1174CCDC6DEDDA3A81781BCD2C0991459231FBAF8D07CC9C",

        "A90019304001":"FF9D0209F847BE5A825AE56C9F1355264A9B3780E98D8F388C51F5C231063798",

        "A90019304008":"909F9336541127A29BF82A2EE2571B60FCE3FBF0098AECD1BFFC5C13473F7B7D",

        "A90019304009":"50119899491E621EAE5286B5FCE423D84B3542893D0DF89BEB34084A88F62B11",

        "A90019304010":"30D29B55B09DB2A7103961D37C275B43E69855E60051CD8355A7A49DAD46E45B",

        "A90019304011":"4B524BC678C4B594757FC455CF3AE4D4F9D7CB882F7C78C984976535DC68B93A",

        "A90019304013":"C42ED80DE794E4AEA7D49A7FA9E56F05B76D8A398C6BDC799D59B9D6F421D404",

        "A90019304015":"430F2953FBF2488E343B96DF8CAFB66C88FC7744C3F2442C10AD626251B3D31E",

        "A90019304014":"9BFA59D227BF0BD2D90B14DCDBD6F7B2B55D79197C81B2023AC737E8FD1AE62C",

        "90019305094":"1EAC0E18FFF796B91F4FF70329F57D992FCF4A69FE391BA50D4EFEB61F6989E9"
    }`;
    let jsonData = JSON.parse(rawData);
    console.log(searchInput.innerHTML);
    console.log(jsonData);
    let result = jsonData[parseInt(searchTerm)];
    console.log(result);
    let final_result = "The activation code is " + result;
    text1.innerHTML = final_result;
});

function displayText() {

}

