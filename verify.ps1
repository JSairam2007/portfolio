$files = @("index.html", "script.js", "style.css", "README.md")
foreach ($f in $files) {
    if (Test-Path $f) {
        $item = Get-Item $f
        Write-Host "File $f exists, size: $($item.Length) bytes"
    } else {
        Write-Host "File $f is MISSING!"
    }
}

$scriptContent = Get-Content "script.js" -Raw
$keywords = @(
    "week: 7",
    "IoT & Connectivity",
    "ESP32 Web Server",
    "Adafruit IO Dashboard",
    "IFTTT + Adafruit IO",
    "Firebase IoT Monitoring",
    "Firebase Logging, Automation",
    "renderProtoWeek7Tasks",
    "Overall System Progression",
    "Local Hardware Control"
)

foreach ($kw in $keywords) {
    if ($scriptContent.IndexOf($kw) -ge 0) {
        Write-Host "Found keyword: $kw"
    } else {
        Write-Host "Missing keyword: $kw"
    }
}

$styleContent = Get-Content "style.css" -Raw
$cssSelectors = @(
    ".proto-tasks-wrapper",
    ".proto-task-tab",
    ".proto-active-task-card",
    ".proto-workflows-container",
    ".proto-wf-step",
    ".proto-progression-grid",
    ".proto-stage-card",
    ".proto-learnings-grid",
    ".proto-tech-groups-grid",
    ".proto-summary-box"
)

foreach ($css in $cssSelectors) {
    if ($styleContent.IndexOf($css) -ge 0) {
        Write-Host "Found CSS selector: $css"
    } else {
        Write-Host "Missing CSS selector: $css"
    }
}
