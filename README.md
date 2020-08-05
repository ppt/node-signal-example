# ตัวอย่างในการใช้ signal ใน node

Signal เหมือนกับ software interrupt ของ process ใน Linux
คำสั่งต่าง ๆ อยู่ใน module Process ของ node

- process.pid : ใช้แสดง process id
- process.on('Signal Name', function(){})

  ชื่อ Signal ดูได้จาก https://nodejs.org/api/process.html#process_signal_events

  function ทำงานเมื่อมี signal เข้ามา ซึ่งอาจจะ program node หรือมากจาก kill command e.g. kill -USR2 999

- process.kill(process-id, 'SIGNAL NAME')

## Shell.js

- https://github.com/shelljs/shelljs
- ช่วยให้เขียนแบบ synchronous ไม่ต้องใช้ callback
- shell.exec("ps -ef | grep receive-signal.js", { silent: true }).stdout

  ใช้ get ผลของ ps -ef เพื่อมาหา Process ID

  { silent: true } เพื่อไม่ให้แสดงผลขึ้น console
