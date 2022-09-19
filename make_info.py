import json

output = open("out.txt", "w")
info = json.load(open("info.json"))
print(info, type(info))

for planet in info: # loop through planets
    output.write(f"<button onclick=\"switch_to('{planet}')\" id=\"{planet}-button\" class=\"planet-buttons\"><img src=\"images/{planet}.png\" class=\"planet-button-image\"></button>")
for planet in info:
    output.write(f"<div id=\"{planet}-info\" class=\"planet-info\">\n   <span class=\"planet-name\" id=\"{planet}-name\">{planet.title()}</span>\n")
    print(info[planet])
    for key in info[planet]: # loop through info
        if key == "Intro":
            output.write(f'<span class="planet-intro" id="{planet}-intro">{info[planet]["Intro"]}</span>')
        else:
            output.write(f"    <strong>{key}</strong>: {info[planet][key]} <br>\n")
    output.write(f"    <img class=\"planet-image\" id={planet}-image src=\"images/{planet}.png\"></div>")