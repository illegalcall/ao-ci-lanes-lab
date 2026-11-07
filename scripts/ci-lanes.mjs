const LANES = { go: [/^backend\//], frontend: [/^frontend\//] };
const files = (await new Response(process.stdin).text()).split("\n").filter(Boolean);
if (files.includes("CRASH_PICKER")) throw new Error("picker crashed on purpose");
const lanes = Object.keys(LANES).filter((k) => files.some((f) => LANES[k].some((r) => r.test(f))));
console.log(`lanes=${JSON.stringify(lanes)}`);
