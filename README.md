# 📌 Git Cheatsheet

## 🚀 Giới thiệu

Git là hệ thống quản lý phiên bản phân tán phổ biến nhất, giúp theo dõi thay đổi trong mã nguồn và hỗ trợ làm việc nhóm hiệu quả. Dưới đây là một bảng tổng hợp các lệnh Git thường dùng.

---

## 📝 Bảng lệnh Git Cheatsheet

| Lệnh                          | Mô tả                              |
| ----------------------------- | ---------------------------------- |
| `git init`                    | Khởi tạo một kho Git mới           |

| `git clone <URL>`             | Sao chép một repo từ remote        |

| `git status`                  | Kiểm tra trạng thái thay đổi       |

| `git add <file>`              | Thêm tệp vào vùng tạm              |
| `git add .`                   | Thêm tất cả thay đổi vào vùng tạm  |

| `git commit -m "message"`     | Tạo commit với mô tả               |
| `git commit --amend`          | Sửa đổi commit gần nhất            |

| `git log`                     | Xem lịch sử commit                 |
| `git log --oneline`           | Xem lịch sử commit ngắn gọn        |

| `git diff`                    | Xem thay đổi chưa được commit      |
| `git branch`                  | Hiển thị danh sách nhánh           |
| `git branch <tên_nhánh>`      | Tạo nhánh mới                      |

| `git checkout <tên_nhánh>`    | Chuyển sang nhánh khác             |

| `git switch <tên_nhánh>`      | Cách mới để chuyển nhánh           |

| `git merge <tên_nhánh>`       | Gộp nhánh vào nhánh hiện tại       |

| `git rebase <tên_nhánh>`      | Rebase thay vì merge               |

| `git push origin <tên_nhánh>` | Đẩy nhánh lên remote               |
| `git pull origin <tên_nhánh>` | Kéo thay đổi từ remote             |

| `git reset --hard <commit>`   | Quay về commit cũ, xóa thay đổi    |
| `git revert <commit>`         | Tạo commit mới đảo ngược commit cũ |

| `git stash`                   | Lưu tạm thay đổi chưa commit       |
| `git stash pop`               | Phục hồi thay đổi đã lưu           |

| `git tag <tag_name>`          | Tạo tag cho phiên bản              |

| `git fetch`                   | Lấy dữ liệu mới từ remote          |

| `git remote -v`               | Xem danh sách remote               |
| `git remote add origin <URL>` | Thêm remote repo                   |

---

## 🔥 Ghi chú

- Dùng `git pull --rebase` thay vì `git pull` để giữ lịch sử sạch hơn.
- `git push --force` có thể mất dữ liệu, hãy cẩn thận khi sử dụng!
- Nếu có xung đột khi merge, hãy chỉnh sửa file thủ công, sau đó `git add` và `git commit` lại.

📌 **Git giúp làm việc nhóm dễ dàng hơn. Hãy sử dụng nó một cách hiệu quả!** 🚀
