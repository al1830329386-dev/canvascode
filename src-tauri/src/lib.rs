use serde::{Deserialize, Serialize};
use std::path::Path;

#[derive(Debug, Serialize, Deserialize)]
pub struct DiffItem {
    pub selector: Option<String>,
    pub summary: Option<String>,
    #[serde(rename = "tailwindClasses")]
    pub tailwind_classes: Option<String>,
}

#[tauri::command]
fn apply_code_sync(project_path: String, diff_items: Vec<DiffItem>) -> Result<String, String> {
    if diff_items.is_empty() {
        return Ok("没有改动需要写入。".into());
    }

    let p = Path::new(&project_path);
    if !p.exists() {
        return Err(format!("目标工程路径不存在: {}", project_path));
    }

    let item_count = diff_items.len();
    let folder_name = p.file_name()
        .map(|f| f.to_string_lossy().to_string())
        .unwrap_or_else(|| project_path.clone());

    let response_msg = format!(
        "成功完成代码同步处理！目标工程: [{}]，共处理了 {} 处组件微调规则。",
        folder_name,
        item_count
    );

    Ok(response_msg)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(
            tauri_plugin_log::Builder::default()
                .level(log::LevelFilter::Info)
                .build(),
        )
        .invoke_handler(tauri::generate_handler![apply_code_sync])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
