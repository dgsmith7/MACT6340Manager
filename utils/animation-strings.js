export const animStrings = {
  part1: "<!DOCTYPE html>\n<html>\n<head>\n<title>",
  part2: "</title>\n</head>\n<body>\n<script>\n",
  part3:
    "class BaconRand {\nconstructor(_tokenData) {\nthis.hashVal = parseInt(_tokenData.tokenHash.slice(2), 16);\n}\nrand() { // mulberry32 from https://github.com/bryc/code/blob/master/jshash/PRNGs.md\nlet t = (this.hashVal += 0x6d2b79f5);\nt = Math.imul(t ^ (t >>> 15), t | 1);\nt ^= t + Math.imul(t ^ (t >>> 7), t | 61);\nreturn ((t ^ (t >>> 14)) >>> 0) / 4294967296;\n}\n}\nconst baconRand = new BaconRand(tokenData);\n",
  part4:
    "\n</script>\n<style>\nhtml, body {\nmargin: 0;\npadding: 0;\nheight: 100vh;\noverflow: hidden;\n}\ndiv {\nresize: both;\noverflow: auto;\n}\nh1 {\nvisibility: hidden;\n}</style>\n</body>\n</html>\n",
};
