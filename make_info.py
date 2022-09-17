import json

output = open("out.txt", "w")
info = json.load(open("info.json"))
print(info, type(info))

for planet in info: # loop through planets
    output.write(f"<button onclick=\"switch_to('{planet}')\" id=\"{planet}-button\" class=\"planet-buttons\"><img src=\"images/{planet}.png\" class=\"planet-button-image\"></button>")
for planet in info:
    output.write(f"<div id=\"{planet}-info\" class=\"planet-info\">")
    print(info[planet])
    for key in info[planet]: # loop through info
        output.write(f"<strong>{key}</strong>: {info[planet][key]} <br>")
    output.write(f"<img class=\"planet-image\" id={planet}-image src=\"images/{planet}.png\"></div>")