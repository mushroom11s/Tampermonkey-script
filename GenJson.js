// ==UserScript==
// @name         echarts option Json 生成
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  try to take over the world!
// @author       You
// @match        https://echarts.apache.org/examples/en/editor.html?**
// @match        https://echarts.apache.org/examples/zh/editor.html?**
// @icon         https://www.google.com/s2/favicons?domain=apache.org
// @grant    GM_setClipboard
// @grant    GM_xmlhttpRequest
// ==/UserScript==


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.addEventListener('load', async function () {
    await sleep(1000);
    const container = document.getElementsByClassName('left-panel').item(0);
    //add text
    {
        const newText = document.createElement("textarea");
        newText.style.height = '100px';
        newText.style.width = '500px';
        newText.cols = 10;
        newText.value = '数据';
        newText.className = 'newoptionjson';
        newText.id = 'newoptionjson';
        container.appendChild(newText);
    }

//set text value
    {
        const textBox = document.getElementsByClassName('newoptionjson').item(0);
        var chart = echarts.getInstanceByDom(document.getElementsByClassName('chart-container').item(0));

        JSON.safeStringify = (obj, indent = 2) => {
            let cache = [];
            const retVal = JSON.stringify(
                obj,
                (key, value) =>
                    typeof value === "object" && value !== null
                        ? cache.includes(value)
                            ? undefined // Duplicate reference found, discard key
                            : cache.push(value) && value // Store value in our collection
                        : value,
                indent
            );
            cache = null;
            return retVal;
        };

        try {
            //textBox.value = JSON.stringify(chart.getOption());
            var editor = ace.edit("code-panel");
            var code = editor.getValue();
            var appendText = "const container = document.getElementsByClassName('newoptionjson').item(0);\n" +
                "JSON.safeStringify = (obj, indent = 2) => {\n" +
                "  let cache = [];\n" +
                "  const retVal = JSON.stringify(\n" +
                "    obj,\n" +
                "    (key, value) =>\n" +
                "      typeof value === \"object\" && value !== null\n" +
                "        ? cache.includes(value)\n" +
                "          ? undefined // Duplicate reference found, discard key\n" +
                "          : cache.push(value) && value // Store value in our collection\n" +
                "        : value,\n" +
                "    indent\n" +
                "  );\n" +
                "  cache = null;\n" +
                "  return retVal;\n" +
                "};\n" +
                "try {\n" +
                "  if (typeof JSON.stringify(option) === 'undefined') {\n" +
                "    throw 'undefined';\n" +
                "  }\n" +
                "  container.value = JSON.stringify(option);\n" +
                "  console.log('JSON.stringify(option)', JSON.stringify(option));\n" +
                "} catch (e) {\n" +
                "  try {\n" +
                "    if(myChart.getOption()==null){\n" +
                "      console.log('null');\n" +
                "      throw 'null';\n" +
                "    }\n" +
                "     console.log('not null', myChart.getOption());\n" +
                "    container.value = JSON.stringify(myChart.getOption());\n" +
                "    console.log('stringify(myChart.getOption())', JSON.stringify(myChart.getOption()));\n" +
                "  } catch (e) {\n" +
                "    if(myChart.getOption() != null ){\n" +
                "    container.value = JSON.safeStringify(myChart.getOption());  \n" +
                "    console.log('safeStringify', JSON.safeStringify(myChart.getOption()));\n" +
                "    }\n" +
                "    console.log('end')\n" +
                "  }\n" +
                "}";
            editor.setValue(code + '\n' + appendText);
            await sleep(1000);
        } catch (exception_var) {
            console.log(exception_var);
            console.log('error2')
            textBox.value = JSON.safeStringify(chart.getOption());
        } finally {
            if (textBox.value == null || textBox.value == '数据') {
                console.log('textbox is null')
                textBox.value = JSON.safeStringify(chart.getOption());
                textBox.style.backgroundColor = "orange";
            }
        }
    }
    //copy
    {
        await sleep(2000);
        document.getElementById('newoptionjson').select();
        var targetText = document.getElementsByClassName('newoptionjson').item(0);
        GM_setClipboard(targetText.value);
        //调用接口
        {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const key = urlParams.get('c');
            console.log(key);
            const vo = {
                'componentKey': '',
                'exampleData': ''
            }
            vo.componentKey = key;
            vo.exampleData = JSON.parse(targetText.value);
            console.log(targetText.value);
            console.log(JSON.stringify(vo));
            GM_xmlhttpRequest({
                method: "POST",
                url: "http://192.168.1.76:9090/dvs/compent",
                data: JSON.stringify(vo),
                headers: {
                    "token": "11",
                    "Content-Type": "application/json"
                },
                onload: function (response) {
                    console.log("gut response",response);
                }
            });
        }
    }
}, false);
